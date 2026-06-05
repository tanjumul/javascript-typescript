const User = [{id : 1 , name : 'Tanjumul'},
  {id:2, name : 'Power Rangers'}, 
  {id : 3, name : 'Jorassic Park'}, 
  {id:4,name:'terminator'}


]

const names = User.map((user)=>{ 
 console.log(user.id, user.name) ; 
})