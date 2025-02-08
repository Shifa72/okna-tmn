import { useState, useRef } from 'react'
import Button from './Button/Button'



// Регулярное выражение для проверки формата номера телефона
const phoneRegex = /^\+7\d{10}$/;
var now = new Date()

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    number: '',
    hasError: false,
    reason: 'installation'
  })

  function handleNameChange(event) {
      setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
      
    }))
  }
  function handleNumberChange(event) {
    const newValue = event.target.value.replace(/\D/g, '');
    let formattedValue = '';
    // Применяем маску для номера телефона
    if (newValue.length > 0) {
      formattedValue += '+7';
    }
    if (newValue.length > 1) {
      formattedValue += newValue.substring(1, 4);
    }
    if (newValue.length > 4) {
      formattedValue += newValue.substring(4, 7);
    }
    if (newValue.length > 7) {
      formattedValue += newValue.substring(7, 11);
    }
    const validPhone = phoneRegex.test(formattedValue)
    setForm((prev) => ({
    ...prev,
    number: formattedValue,
    hasError: !validPhone,
    }))
  }

  async function handleSubmit() {

    const { name, number, reason } = form;
    const YOUR_BOT_TOKEN ="7753370928:AAHa06pAsGu3T3g1ka4aKOPOWACqSKS7sRU";
    const YOUR_CHAT_ID = "@zayavkaokna";
    // Создаем сообщение для отправки
    const msgText = `Новая заявка!\nИмя: ${name}\nТелефон: ${number}\nПричина: ${reason}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: YOUR_CHAT_ID,
            text: msgText,
          }),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert('Заявка успешно отправлена!');
         // Сбрасываем форму после успешной отправки
         setForm({
          name: '',
          number: '',
          hasError: false,
          reason: 'installation'
        })

      } else {
        alert('Произошла ошибка при отправке заявки.');
        }
      
      } catch (error) {
      console.error('Произошла ошибка:', error);
      alert('Произошла ошибка при отправке заявки.');
    }
  };


  return (
    <section>
      <h3>Оставьте заявку</h3>  
      <form 
        style={{ marginBottom: '1rem'}}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="name">Ваше Имя</label>
        <input 
          type="text" 
          id="name" 
          className="control" 
          value={form.name}
          style ={{
            border: form.hasError ? '1px solid red' : null,            
          }}
          onChange={handleNameChange} 
        />

        <label htmlFor="number">Ваш номер</label>
        <input 
          type="tel" 
          id="number" 
          className="control" 
          value={form.number}
          style ={{
            border: form.hasError ? '1px solid red' : null,            
          }}
          onChange={handleNumberChange} 
          placeholder="+7 (XXX) XXX-XXXX"
          

        />

        <label htmlFor="reason">Что необходимо сделать</label>
        <select 
          id="reason" 
          className="control" 
          value={form.reason} 
          onChange={event => setForm(prev => ({...prev, reason:event.target.value}))
          }
        >
          <option value="installation">Установка</option>
          <option value="service">Обслуживание</option>
          <option value="repair">Ремонт</option>
          <option value="mosquitoNets">Москитные сетки</option>
        </select>

        <Button 
          disabled={form.hasError} 
          isActive={!form.hasError} 
        >
          Отправить
        </Button>
        
          
      </form>
    </section>
  )

}

