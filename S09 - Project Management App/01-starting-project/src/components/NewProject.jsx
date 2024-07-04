import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }
            onAdd({
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDueDate
            })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption={"Close"}>
                <h2 className={"text-xl font-bold text-stone-700 mt-4 my-4"}>Invalid Input</h2>
                <p className={"text-stone-600 mb-4"}>Oops... looks like you forgot to enter a value.</p>
                <p className={"text-stone-600 mb-4"}>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className={"w-[35rem] mt-16"}>
                <menu className={"flex items-center justify-end gap-4 my-4"}>
                    <li>
                        <button
                            className={"text-stone-800 hover:text-stone-950"}
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className={"px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"}
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label={"Title"} type={"text"}/>
                    <Input ref={description} label={"Description"} textArea/>
                    <Input ref={dueDate} label={"Due Date"} type={"date"}/>
                </div>
            </div>
        </>
    )
}