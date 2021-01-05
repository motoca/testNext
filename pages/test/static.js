export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <b>Data dinâmico:</b> {dynamicDateString}
            <p><b>Data estático:</b> {props.staticDateString}</p>
        </div>
    )
}

export default Tempo;