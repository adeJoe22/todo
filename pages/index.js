import { useState } from "react";
import CheckBox from "../ui/checkbox";
import Button from "../ui/button";
import TrashIcon from "../ui/svg/trash-icon";
import TextField from "../ui/textfield";

export default function Home() {
  const [task, setTask] = useState({
    done: false,
    text: "Walk the Dog",
  });
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="mt-16 md:w-1/3 mx-auto">
        {JSON.stringify(task.text)}
        <div className="bg-gray-600 py-3 px-5 rounded-lg text-3xl">
          <div className="flex gap-4 items-center ">
            <div>
              <CheckBox
                value={task.done}
                onChange={(done) =>
                  setTask((prev) => ({
                    ...prev,
                    done,
                  }))
                }
              />
            </div>
            <div className="flex-grow " onClick={() => setEdit(true)}>
              {edit ? (
                <TextField
                  value={task.text}
                  onBlur={() => setEdit(false)}
                  onChange={(text) =>
                    setTask((prev) => ({
                      ...prev,
                      text,
                    }))
                  }
                />
              ) : (
                <p className="p-2 border-b-[3px] border-transparent text-white">
                  {task.text}
                </p>
              )}
            </div>

            <Button className="transition hover:rotate-12 hover:bg-red-500 p-3 bg-gray-300 rounded-lg">
              <TrashIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="absolute bg-black opacity-90 inset-0 z-40">
          <div className="absolute z-50 bg-white rounded-2xl inset-[20%] text-gray-800">
            <div className="bg-gray-50 rounded-2xl">
              <div className="">Confirmation</div> icon
            </div>
            <div className="p-8">
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
