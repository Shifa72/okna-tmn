import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
    return (
        <section className='tabSection'>
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