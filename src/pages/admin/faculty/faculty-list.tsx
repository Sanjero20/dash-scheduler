import { getFaculties } from "@/services/api/admin";
import { useQuery } from "@tanstack/react-query";
import { DeleteFaculty } from "@/components/button-delete";

function FacultyList() {
  const { data } = useQuery({
    queryKey: ["faculty-list"],
    queryFn: getFaculties,
  });

  return (
    <div>
      <h1 className="text-lg font-bold">Account List</h1>
      {data &&
        data.map((account) => (
          <p key={account.id}>
            {account.name} - {account.initials}{" "}
            <DeleteFaculty initials={account.initials} />
          </p>
        ))}
    </div>
  );
}

export default FacultyList;
