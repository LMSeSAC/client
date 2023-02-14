import Swal from "sweetalert2";

export function cancle(cb: () => void) {
  Swal.fire({
    icon: "warning",
    text: "작성을 중단하고 나가시겠습니까?",
    showCancelButton: true,
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  }).then((res) => {
    if (res.isConfirmed) {
      cb();
    }
  });
}

export function post(cb: () => void) {
  Swal.fire({
    icon: "success",
    text: "작성 완료",
    showConfirmButton: false,
    timer: 1000,
  }).then(() => {
    cb();
  });
}
