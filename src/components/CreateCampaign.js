 import React, { Component, PropTypes } from 'react'
import FormFirstPage from './forms/form_1'
import FormSecondPage from './forms/form_2'
import FormThirdPage from './forms/form_3'
import FormFourthPage from './forms/form_4'
import FormFifthPage from './forms/form_5'
import FormSixthPage from "./forms/form_6"
import FormSeventhPage from "./forms/form_7"
import FormEithPage from "./forms/form_8"
import RaisedButton from 'material-ui/RaisedButton'
import Animation from 'react-addons-css-transition-group'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './forms/form_material_styles'
import TopCounter from "./topCounter"


import geolib from "geolib" //distance calculator


import { config } from "dotenv"
config()


const google = window.google


class CreateCampaign extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.updateMarker = this.updateMarker.bind(this)
    this.createRoute = this.createRoute.bind(this)
    this.state = {
      page: 1,
      slide: false,
      userMarker: {
        position: {
          lat: 0,
          lng: 0
        }
      },
      workMarkers: [
        {
          position: {   //UB6-8UH, ADD EXTRA TO THIS ARRAY
            lat: 51.54318,
            lng: -0.359016
          }
        }/*,
        {
          position: {   
            lat: 51.64318,
            lng: -0.459016
          }
        }*/
      ],
      origin: null,
      destination: null,
      directions: null,
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1, slide: true })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  updateMarker(newMarker={}){
    this.setState({
      userMarker: newMarker
    })
  }



  createRoute(){

    this.setState({
      origin: this.state.userMarker.position,
      destination: this.state.workMarkers[0].position,
      directions: null,
    }, () => {

    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {


      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        }, () => {
          console.log("success")
          //document.write(JSON.stringify(this.state.directions))
        });
      } else {
        //document.write(JSON.stringify(this.state.directions))
        console.error(`error fetching directions ${result}`);
      }
    });

    })
  }



  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      //<div className={`form-container ${this.state.slide ? 'slide' : ''}`}>

        <Grid className='form-container'>
          <Row center="xs">
            <Col xs={13} sm={12} md={2} lg={8}>
              {page === 1 && 
                <div>
                  <h2>PLEASE APPLY FOR THIS JOB BY REGISTERING WITH US.</h2>
                  <h3>*select jobs you wish to apply for*</h3>
                </div>
              }
              {/*page > 1 && <div finishedStep="trual">{topCounter()}</div>         //THIS WORKS */}
              {page > 1 && 
                <TopCounter 
                  finishedStep={this.state.page}
                />}
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} sm={12} md={2} lg={8}>
              {page === 1 && 
                <RaisedButton primary={true} 
                style={styles.raisedButtonStyle}
                label="APPLY"
                onClick={this.nextPage}/>}
                <Animation
                    transitionName='fade'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                  {page === 2 &&
                    <FormFirstPage 
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage} 
                    />}
                  {page === 3 &&
                    <FormSecondPage
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                    />}
                  {page === 4 &&
                    <FormThirdPage
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                    />}
                  {page === 5 &&
                    <FormFourthPage
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                    />}
                  {page === 6 &&
                    <FormFifthPage
                      createRoute={this.createRoute}
                      directions={this.state.directions}
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                      userMarker={this.state.userMarker}
                      workMarkers={this.state.workMarkers}
                      updateMarker={this.updateMarker}
                    />}
                  {page === 7 &&
                    <FormSixthPage 
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                    />}
                  {page === 8 &&
                    <FormSeventhPage 
                      previousPage={this.previousPage}
                      onSubmit={this.nextPage}
                    />}
                  {page === 9 &&
                    <FormEithPage 
                      previousPage={this.previousPage}
                      onSubmit={onSubmit}
                    />}
                </Animation>
            </Col>
          </Row>
        </Grid>
    )
  }
}

CreateCampaign.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CreateCampaign