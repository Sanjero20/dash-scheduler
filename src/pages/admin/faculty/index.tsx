import FacultyForm from "./faculty-form";
import FacultyList from "./faculty-list";
import UploadFacultyForm from "./upload-faculty-form";

function FacultyPage() {
  return (
    <div>
      <UploadFacultyForm />
      <FacultyForm />
      <FacultyList />
    </div>
  );
}

export default FacultyPage;
