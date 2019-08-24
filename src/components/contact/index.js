import React from 'react'
import {Jumbotron, Container} from 'reactstrap'

class Contact extends React.Component {
  render() {
    return (
        <Jumbotron className="bg-white">
            <Container>
                <h1 className="display-1">Contact Us</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at fringilla quam, ut gravida risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <hr className="my-2" />
                <p>Nullam mollis velit eget sodales efficitur. Phasellus eu tellus quis dui accumsan imperdiet eu quis ipsum. Sed suscipit ultricies eleifend. Phasellus semper rutrum venenatis. Aenean tempus pharetra lorem, ut accumsan dui efficitur id. Vestibulum eu volutpat metus, id pretium enim. Maecenas egestas libero eget libero elementum convallis. Nunc mauris ligula, efficitur a ex eu, scelerisque pulvinar mauris. Vivamus vel lacus ultrices orci pellentesque scelerisque. Nullam arcu lorem, suscipit nec elementum sed, dignissim quis risus. Cras in urna sit amet risus semper tincidunt. Cras vestibulum risus ac lectus efficitur tristique. Aliquam sapien elit, placerat quis enim a, posuere dapibus ipsum. Aliquam posuere tellus id consequat molestie.</p>
            </Container>
        </Jumbotron>
    )
  }
}

export default Contact
