import React from 'react';


class SenContainer extends React.Component {
    
    state = {
        isEdit: false,
        senInSub: this.props.words || '没有句子'
    };

    handleEditClick = () => {
        this.setState({ isEdit: true });
    };
    
    handleInputChange = ev => {
        this.setState({
            senInSub: ev.target.value
        });
    };
    
    handleInputSubmit = () => {
        this.props.onEditSubmit({
            id: this.props.key,
            sentence: this.state.senInSub
        })
    };
    
    handleBack = () => {
        this.setState({ isEdit: false });
    };

    render() {
        const {
            key
        } = this.props;
        
        const {
           isEdit,
           senInSub
        } = this.state;
        
        if(isEdit) {
            
            return (
                
           <section>
              <input
              type='text' 
              value={senInSub}
              onChange={this.handleInputChange}
              /> 
             
              <div className='flex-container'>
                  
              <button
              onClick={this.handleBack}
              >
              返回
              </button>
                  
              <button 
              className='greenBtn'
              onClick={this.handleInputSubmit}>
              确认
              </button>
                  
              </div>
          </section>
        )
                
        } else {
            
            return (
            <section id={key}>
                
               <p>
                 { senInSub }
               </p>
            
                <div className='flex-container'>
                
                <button>
                  删除
                </button>
                
                <button 
                className='greenBtn' 
                onClick={this.handleEditClick}
                >
                  修改
                </button>
                </div>
                
             </section>
    )
        }
    }
}

export default SenContainer;