import { deleteEmployee } from "@/redux/slices/employeesSlice";
import { useAppDispatch } from "@/redux/store";
import toast from "react-hot-toast";

const useEmployeeTable = () => {
  const dispatch = useAppDispatch();
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteEmployee(id));
      toast.success("Employee deleted Successfully!");
    } catch (error) {
      toast.error("Something went wromg while deleting the Employee!");
      console.log("error", error);
    }
  };
  return { handleDelete };
};

export default useEmployeeTable;
