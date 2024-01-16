const stars =  document.querySelectorAll('.stars i');

stars.forEach((star,indexcurrent)=>{
  star.addEventListener('click',()=>{
    stars.forEach((star, indexlast)=>{
      indexcurrent>=indexlast ? star.classList.add('active') : star.classList.remove('active');
    });
  });
});
