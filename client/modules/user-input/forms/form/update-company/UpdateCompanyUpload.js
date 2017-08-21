// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import FormWrapper from '../../containers/FormWrapper';
import FormHeader from '../../components/FormHeader';
import FormFooter from '../../components/FormFooter';
import { BackButton, SubmitButton, Upload } from '../../../inputs/input';
import { uploadCompanyLogo } from '../../../../account/create/company/ducks/';

class UpdateCompanyLogo extends Component {
  formSubmit = (): void => {
    browserHistory.push(`/complete/company/${this.props.params.companyId}`);
  };

  handleOnDrop = (files: Array<{}>): void => {
    const { dispatch, params } = this.props;
    const file: {} = files[0];
    const formData = new FormData();
    formData.append('logo', file);

    dispatch(uploadCompanyLogo(formData, params.companyId));
  };

  handleExit = (): void => {
    browserHistory.push('/account/jobs');
  };

  render() {
    const { companies, handleSubmit } = this.props;

    return (
      <FormWrapper
        handleSubmit={handleSubmit}
        formSubmit={this.formSubmit}
        formErrors={companies.errors}
        theme="marble"
      >
        <Field
          name="logo"
          label="Company logo"
          handleOnDrop={this.handleOnDrop}
          isUploading={companies.isUploading}
          component={Upload}
          buttonText="Upload Logo"
        />
        <Field
          name="submitButton"
          buttonText="Save"
          component={SubmitButton}
          disabled={!companies.successfulUpload}
        />
      </FormWrapper>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.account.companies
});

UpdateCompanyLogo = reduxForm({
  form: 'company-upload',
  destroyOnUnmount: false
})(UpdateCompanyLogo);

export default connect(mapStateToProps)(UpdateCompanyLogo);