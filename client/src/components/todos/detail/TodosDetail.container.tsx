import { withAuth } from "../../../auth/auth";
import TodosDetailPresetner from "./TodosDetail.presenter";

function TodosDetailContainer() {
  return <TodosDetailPresetner />;
}

export default withAuth(TodosDetailContainer);
