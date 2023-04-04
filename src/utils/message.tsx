import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwAlert = withReactContent(Swal)

export function error(title: string, text: string) {
    SwAlert.fire({
      icon: 'error',
      title: title,
      text: text,
    })
  }
  
  export function success(title: string, cb: () => void) {
    SwAlert.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      cb()
    })
  }
  
  export function success_with_text(title: string, text: string) {
    SwAlert.fire({
      icon: 'success',
      title: title,
      text: text,
    })
  }
  
  export function warning(title: string, text: string) {
    SwAlert.fire({
      icon: 'warning',
      title: title,
      text: text,
      confirmButtonColor: '#2778c4',
    })
  }
  
  export function confirm(
    title: string,
    text: string,
    cb1: () => void,
    cb2: () => void,
  ) {
    SwAlert.fire({
      icon: 'warning',
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: '#2778c4',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
    }).then((result:{isConfirmed:boolean}) => {
      if (result.isConfirmed) {
        cb1()
      } else {
        cb2()
      }
    })
  }