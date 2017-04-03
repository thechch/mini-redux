const connect = (mapStateToProps, mapDispatchToAction) => {
    ( WrappedComponent ) => {
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

export default connect;