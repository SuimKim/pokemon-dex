import Swal from "sweetalert2";

export const swalAlert = (text) => {
  return Swal.fire({
    icon: "error",
    title: "추가할 수 없어요!",
    text: text,
    confirmButtonColor: "#ffcb05",
  });
};

export const swalDeleteAlert = () => {
  return Swal.fire({
    title: "포켓몬을 삭제하시겠어요?",
    text: "괜찮아요. 또 추가하면 돼요. (｡◠‿◠｡)",
    icon: "warning",

    showCancelButton: true,
    confirmButtonColor: "#ffcb05",
    cancelButtonColor: "#a2a2a2",
    confirmButtonText: "OK",
    cancelButtonText: "NO",
  });
};

export const swalToast = (text) => {
  return Swal.fire({
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};
