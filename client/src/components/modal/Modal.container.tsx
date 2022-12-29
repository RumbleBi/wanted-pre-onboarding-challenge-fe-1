import ModalPresenter from "./Modal.presenter";

export default function ModalContainer(props: any) {
  return <ModalPresenter todoData={props.todoData} setIsUpdate={props.setIsUpdate} />;
}
