import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom'; //createPortal은 리액트에서 제공하는 API로, 모달을 렌더링할 때 사용한다. 첫번째 인자로 모달을 렌더링할 컴포넌트를 전달하고, 두번째 인자로 모달을 렌더링할 DOM 요소를 전달한다. 이렇게 하면 모달은 렌더링된 컴포넌트의 부모 요소가 아닌 지정한 DOM 요소에 렌더링된다. 이렇게 하면 모달이 렌더링된 컴포넌트의 스타일이나 다른 요소에 영향을 받지 않는다.
import Button from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shawdow-md'>
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;

//forwardRef를 쓰는 이유는 ref를 자식 컴포넌트에게 전달할려고 사용한다.
//useImperativeHandle를 쓰는 이유는 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출할 수 있게 하기 위해서 사용한다. ex) showModal() 같은 메서드를 호출할 수 있게 하기 위해서 사용한다.
