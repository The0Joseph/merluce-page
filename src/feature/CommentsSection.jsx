
const commetsList = [
    {
        id: 1,
        autor: 'Carlos R.',
        comment: 'Encuentro todo lo que necesito para la semana y a buenos precios. Muy recomendado!'
    },
    {
        id: 2,
        autor: 'Mariana L.',
        comment: 'La atención es rápida y siempre tienen productos frescos. Me encanta comprar aquí.'
    },
    {
        id: 3,
        autor: 'José T.',
        comment: 'Variedad de marcas y productos. Todo bien organizados y fácil de encontrar.'
    }
]

export const CommentsSection = () => {
    return (
            <div className="flex flex-col md:flex-row border-color-primary border my-9">
                {Array.isArray(commetsList) && commetsList.map((comment) => (
                    <div key={comment.id} className=" font-serif text-center p-15 md:p-25 border-color-primary border-r" >
                        <h1 className="mb-5 text-xl">{ comment.autor }</h1>
                        <p className="leading-relaxed">"{ comment.comment }"</p>
                    </div>
                ))}
            </div>
    );
};