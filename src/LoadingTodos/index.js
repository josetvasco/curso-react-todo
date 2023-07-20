import './LoadingTodos.css';

function LoadingTodos() {
    return (
        <>
            <div className='card-skeleton'>
                <div className='check-skeleton skeleton'></div>
                <div className='text-skeleton skeleton'></div>
                <div className='delete-skeleton skeleton'></div>
            </div>
        </>
    );
}

export { LoadingTodos };