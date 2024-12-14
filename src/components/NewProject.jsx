import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    //벨리데이션, 만약 값이 없을 경우에 모달 보여주기, trim은 공백제거(공백 제거 후 값이 없으면 true)
    if (
      enterdTitle.trim() === '' ||
      enterdDescription.trim() === '' ||
      enterdDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enterdTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops</p>
        <p className='text-stone-600 mb-4'>Please make sure fill all blank</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950'>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type='text' label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input ref={dueDate} type='date' label='Due Date' />
        </div>
      </div>
    </>
  );
}
