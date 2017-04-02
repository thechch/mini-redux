function connect(mapStateToProps, mapDispatchToAction) {
    return function(WrappedComponent) {
        return class extends React.Component {
            render() {
                return (
                    <WrappedComponent 
                        { ...this.props }
                        { ...mapStateToProps(store.getState(), this.props)}
                        { ...mapDispatchToAction(store.dispatch, this.props)} 
                    />
                )
            }
        }
    }
}