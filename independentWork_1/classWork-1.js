export const getHolidayPrizes = (f, s, t) => {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();
    let birthDay = new Date(s);
    let monthOfBirth = birthDay.getMonth();
    let dayOfBirth = birthDay.getDate();
    let name = f; 
    let sallary = t;
    let gift; 
    let message; 
    
    if (dayOfBirth === currentDate || monthOfBirth === currentMonth) {
      gift = Math.round((sallary*10 + dayOfBirth*(monthOfBirth+1))/10)*10;
      message = `У ${name} сегодня праздник, его премия составляет ${gift}.`
    } 
    // Код проверки на несовпадение
    /* else {
      message = "Сегодня никто из сотрудников не отмечает день рождения."
    }
    */
   
    return message;
  
};
