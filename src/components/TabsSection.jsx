import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
    return (
        <section style={{
            marginBottom: '1rem',
            marginTop: '0rem',
            display: 'flex', // Включаем flexbox для равномерного распределения кнопок
            justifyContent: 'space-between', // Распределяем кнопки равномерно по ширине
            
        }}>
            <Button
                isActive={active === 'main'}
                onClick={() => onChange('main')}
                style={{ flexGrow: 1 }} // Растягиваем кнопку на доступное пространство
            >
                Главная
            </Button>
            <Button
                isActive={active === 'ourworks'}
                onClick={() => onChange('ourworks')}
                style={{ flexGrow: 1 }}
            >
                Наши работы
            </Button>
            <Button
                isActive={active === 'feedback'}
                onClick={() => onChange('feedback')}
                style={{ flexGrow: 1 }}
            >
                Обратная связь
            </Button>

        </section>
    );
}