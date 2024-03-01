import { Trash, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useQuery } from "@tanstack/react-query";
import { getFaculties } from "@/services/api/faculty";
import { ScrollArea } from "@/components/ui/scroll-area";
import useFacultyModalStore from "@/stores/modal/facultyModal";

function FacultyList() {
  const { openModal } = useFacultyModalStore();

  const { data } = useQuery({
    queryKey: ["faculty-list"],
    queryFn: getFaculties,
  });

  return (
    <ScrollArea className="h-full w-full">
      <h1 className="text-xl font-bold">Faculty List</h1>

      <hr />

      <div className="h-full w-full">
        {data &&
          data.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between rounded p-2 hover:bg-slate-200"
            >
              <p className="col-span-8 text-lg">{account.name}</p>

              <section className="flex gap-2">
                <Button
                  variant={"destructive"}
                  onClick={() => openModal(account, "delete")}
                >
                  <Trash />
                </Button>

                <Button
                  variant={"default"}
                  onClick={() => openModal(account, "update")}
                >
                  <Edit />
                </Button>
              </section>
            </div>
          ))}
      </div>
    </ScrollArea>
  );
}

export default FacultyList;
