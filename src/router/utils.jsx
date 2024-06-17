export function withShowCode(WrappedComponent) {
    const relativeFilePath = WrappedComponent.__file;
    const part = relativeFilePath.split('/src')[1];
    const validPath = window.location.origin + '/src' + part;

    // fetch(validPath).then((response) => response.text())
    //     .then((data) => console.log(data));

    return {
        setup(props, { attrs, slots }) {

            console.log('WrappedComponent', WrappedComponent, validPath)

            return () => (
                <div>
                    <WrappedComponent {...{ props, attrs, slots }} />
                    <a href={validPath} >showCode</a>
                </div>
            );
        }
    };
}