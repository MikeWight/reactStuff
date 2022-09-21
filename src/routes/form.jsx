import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const styles = {
    formStyles: {
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        height: "300px",
        width: "500px"
    }
}

export default function FormZO() {
    const [objData, setObjData] = useState({});
    const getInputs = (value, name) => {
        let d = {[name]: value}

        setObjData({...objData, ...d})
    };
    
    const showStuff = () => {
        console.log(objData);
    }

    return (
      <div style={styles.formStyles}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            type="text"
            name="name3"
            placeholder="Your name"
          />
        </Form.Group>
        <Button variant="primary" onClick={showStuff}>
          Submit
        </Button>
      </div>
    );
}