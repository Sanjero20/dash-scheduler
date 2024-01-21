import { Button } from "@mui/material";
import { deleteAccount } from "@/services/api/admin";
import { deleteFaculty } from "@/services/api/faculty";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useToast } from "./ui/use-toast";

interface DeleteButtonProps {
  deleteCallback: () => void;
}

interface DeleteButtonTemplateProps {
  id: number;
}

interface DeleteFacultyTemplateProps {
  initials: string;
}

const DeleteButtonTemplate = ({ deleteCallback }: DeleteButtonProps) => {
  return (
    <>
      <Button
        startIcon={<DeleteForeverIcon />}
        onClick={deleteCallback}
        sx={{
          display: "inline",
          color: "black",
        }}
      />
    </>
  );
};

export const DeleteUser = ({ id }: DeleteButtonTemplateProps) => {
  const { toast } = useToast();
  return (
    <DeleteButtonTemplate
      deleteCallback={async () => {
        const response = await deleteAccount(id);
        if (response.status === 200) {
          toast({
            variant: "success",
            description: "The user has beed deleted successfully",
            action: <DeleteForeverIcon />,
          });

          // forgive me
          location.reload();
        }
      }}
    />
  );
};

export const DeleteFaculty = ({ initials }: DeleteFacultyTemplateProps) => {
  const { toast } = useToast();
  return (
    <DeleteButtonTemplate
      deleteCallback={async () => {
        const response = await deleteFaculty(initials);
        if (response.status === 200) {
          toast({
            variant: "success",
            description: "The faculty has beed deleted successfully",
            action: <DeleteForeverIcon />,
          });
        }

        // forgive me again
        location.reload();
      }}
    />
  );
};
