function welcome({ lang, agency }) {
    const component = require('./' + lang).default
    return component({ agency })

    return <LazyLoadModule resolve={() => import("./" + props.lang)} />
}
export default welcome;