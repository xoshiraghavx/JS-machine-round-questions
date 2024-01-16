const notifications = document.querySelector('.notifications'), 
buttons = document.querySelectorAll('.buttons .btn');

const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-check',
    text: 'this is a success toast'
  },
  error: {
    icon: 'fa-exclamation',
    text: 'this is an error toast'
  }
}

const createToast = (id) => {
  const {icon, text} = toastDetails[id];
  const toast = document.createElement('li');
  toast.className = `toast ${id}`
  toast.innerHTML = `<div>
                    <i class="fa-solid ${icon}"></i>
                    <p>${text}</p>
                    </div>`
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(()=>removeToast(toast), toastDetails.timer);
}

const removeToast = (toast)=>{
  setTimeout(()=>{toast.remove()}, 500);
}

buttons.forEach((btn)=>{
  btn.addEventListener('click', ()=>{createToast(btn.id)})
})