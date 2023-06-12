import React from "react"

const DefaultPage = ({ title, content }) => {
    return (
        <section className='page'>
            <span className='title'>{title}</span>
            <article>
                <div dangerouslySetInnerHTML={{ __html: content }}/>
            </article>
            <p/>
        </section>
    );
};

export default DefaultPage;