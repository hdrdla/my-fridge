constructor(props) {
    super(props);
    this.state = {
      newList: [],
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('current props ' + this.props.fridgeFreezerList);
    console.log('next props ' + JSON.stringify(nextProps));

    if (this.props.fridgeFreezerList &&
          this.state.newList !== nextProps.fridgeFreezerList) {
      this.setState({
        newList: nextProps.fridgeFreezerList
      })
    }
  }