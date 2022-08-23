import React from 'react'

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('');

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div class="modal-content">
        <h4>System Log</h4>
        <div className="row">
          <div className="input-field">
            <input 
            type="text" 
            name='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            />
            <label 
            htmlFor="message" 
            className='active'>
              log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select 
            name="tech" 
            value={tech} 
            className='browser-default' 
            onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam smith'>Sam smith</option>
              <option value='Ladi poe'>Ladi poe</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input 
                type="checkbox" 
                className='filled-in' 
                checked={attention} 
                value={attention}
                onChange={e => setAttention(!attention) }
                /> 
                  <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default AddLogModal