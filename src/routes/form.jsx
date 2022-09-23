import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const styles = {
    formStyles: {
        width: "500px"
    }
}

export default function FormZO() {
    const [objData, setObjData] = useState({});
    const [value, setValue] = useState([]);
    const getInputs = (value, name) => {
        let d = {[name]: value}

        setObjData({...objData, ...d})
    };
    
    const showStuff = () => {
        console.log(objData);
    }

    const handleChange = (val) => {
      console.log(val)
      setValue(val)
      let d = {"checkers": val}
      setObjData({...objData, ...d})
    }

    return (
      <Card style={styles.formStyles}>
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => getInputs(e.target.value, e.target.name)}
              type="text"
              name="name3"
              placeholder="Your name"
            />
          </Form.Group>
          <ToggleButtonGroup
            className="mb-4"
            type="checkbox"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton id="tbg-btn-1" value="mushrooms">
              Mushrooms
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value="peperonie">
              Peperonie
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value="cheese">
              Cheese
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <Button variant="primary" onClick={showStuff}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    );
}