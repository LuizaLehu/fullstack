"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';
import { addNewItem, editItem } from '@/repository';
import { TItem, DeviceType } from '@/types/data';

type TEditItem = Omit<TItem, 'id'>

const NewEntryForm = ({ item }: { item?: TItem }) => {
  const initialValues: TEditItem = {
    applicationHostname: item?.applicationHostname ?? '',
    timestamp: item?.timestamp ?? '',
    type: item?.type ?? DeviceType.Web,
    user: item?.user ?? '',
    country: item?.country ?? '',
    ip: item?.ip ?? '',
    device: item?.device ?? '',
    tags: item?.tags ?? [],
    isDangerous: !!item?.isDangerous,
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required('ID is required'),
    applicationHostname: Yup.string().required('Application Hostname is required'),
    timestamp: Yup.date().required('Timestamp is required'),
    type: Yup.string().required('Type is required'),
    user: Yup.string(),
    country: Yup.string(),
    ip: Yup.string(),
    device: Yup.string(),
    tagTitle: Yup.string(),
    tagDescription: Yup.string(),
    tagColor: Yup.string(),
    isDangerous: Yup.boolean(),
  });

  const handleSubmit = async (values: TEditItem, actions: any) => {
    try {
      if (item) {
        await editItem(item.id, values);
      } else {

        await addNewItem(values);
      }
    } catch (error) {
      // Handle errors if submission fails
      console.error('Failed to submit:', error);
      actions.setStatus({ error: 'Failed to submit' });
    }
  };


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light style={{ height: '50vh' }}">
      <div className="card p-3 w-50 form-container" style={{ backgroundColor: 'lightgray' }}>
        <h2 className="mb-3 text-center text-primary">{item ? 'Edit Item' : 'Add New Item'}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">ID:</label>
              <Field className="form-control form-control-sm" type="text" id="id" name="id" />
              <ErrorMessage name="id" component="div" className="text-danger" />
            </div>
            <div>
              <label htmlFor="applicationHostname" className="form-label">Application Hostname:</label>
              <Field className="form-control form-control-sm" type="text" id="applicationHostname" name="applicationHostname" />
              <ErrorMessage name="applicationHostname" component="div" className="text-danger" />
            </div>
            <div>
              <label htmlFor="timestamp" className="form-label">Timestamp:</label>
              <Field className="form-control form-control-sm bg-light" type="text" id="timestamp" name="timestamp" />
              <ErrorMessage name="timestamp" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">Type:</label>
              <Field className="form-control form-control-sm" type="text" id="type" name="type" />
              <ErrorMessage name="type" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">User:</label>
              <Field className="form-control form-control-sm" type="text" id="user" name="user" />
              <ErrorMessage name="user" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country:</label>
              <Field className="form-control form-control-sm" type="text" id="country" name="country" />
              <ErrorMessage name="country" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="ip" className="form-label">IP:</label>
              <Field className="form-control form-control-sm" type="text" id="ip" name="ip" />
              <ErrorMessage name="ip" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="device" className="form-label">Device:</label>
              <Field className="form-control form-control-sm" type="text" id="device" name="device" />
              <ErrorMessage name="device" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="tagTitle" className="form-label">Tag Title:</label>
              <Field className="form-control form-control-sm" type="text" id="tagTitle" name="tagTitle" />
              <ErrorMessage name="tagTitle" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="tagDescription" className="form-label">Tag Description:</label>
              <Field className="form-control form-control-sm" type="text" id="tagDescription" name="tagDescription" />
              <ErrorMessage name="tagDescription" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="tagColor" className="form-label">Tag Color:</label>
              <Field className="form-control form-control-sm" type="text" id="tagColor" name="tagColor" />
              <ErrorMessage name="tagColor" component="div" className="text-danger" />
            </div>
            <div className="mb-3 form-check">
              <input className="form-check-input" type="checkbox" id="isDangerous" name="isDangerous" />
              <label className="form-check-label" htmlFor="isDangerous">
                Is Dangerous
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );

};

export default NewEntryForm;  