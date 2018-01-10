function abbrevName(name){
    var parts = name.split(' ');
    firstName = parts[0].split('')[0];
    lastName = parts[1].split('')[0];
    initials = (firstName + '.' + lastName).toUpperCase();
    return (initials);
  
  }