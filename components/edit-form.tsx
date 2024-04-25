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

  const handleSubmit = async (values: FormikValues, actions: any) => {
    try {
      // Call the addNewItem function with form data
      await addNewItem(newItemData); // Add new item using the API

    } catch (error) {
      // Handle errors if submission fails
      console.error('Failed to add new item:', error);
      actions.setStatus({ error: 'Failed to add new item' });
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="id">ID:</label>
          <Field className="form-control" type="text" id="id" name="id" />
          <ErrorMessage name="id" component="div" />
        </div>
        <div>
          <label htmlFor="applicationHostname">Application Hostname:</label>
          <Field type="text" id="applicationHostname" name="applicationHostname" />
          <ErrorMessage name="applicationHostname" component="div" />
        </div>
        <div>
          <label htmlFor="timestamp">Timestamp:</label>
          <Field type="text" id="timestamp" name="timestamp" />
          <ErrorMessage name="timestamp" component="div" />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <Field type="text" id="type" name="type" />
          <ErrorMessage name="type" component="div" />
        </div><div>
          <label htmlFor="user">User:</label>
          <Field type="text" id="user" name="user" />
          <ErrorMessage name="user" component="div" />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <Field type="text" id="country" name="country" />
          <ErrorMessage name="country" component="div" />
        </div>
        <div>
          <label htmlFor="ip">IP:</label>
          <Field type="text" id="ip" name="ip" />
          <ErrorMessage name="ip" component="div" />
        </div>
        <div>
          <label htmlFor="device">Device:</label>
          <Field type="text" id="device" name="device" />
          <ErrorMessage name="device" component="div" />
        </div>
        <div>
          <label htmlFor="tagTitle">Tag Title:</label>
          <Field type="text" id="tagTitle" name="tagTitle" />
          <ErrorMessage name="tagTitle" component="div" />
        </div>
        <div>
          <label htmlFor="tagDescription">Tag Description:</label>
          <Field type="text" id="tagDescription" name="tagDescription" />
          <ErrorMessage name="tagDescription" component="div" />
        </div>
        <div>
          <label htmlFor="tagColor">Tag Color:</label>
          <Field type="text" id="tagColor" name="tagColor" />
          <ErrorMessage name="tagColor" component="div" />
        </div>
        <div>
          <label htmlFor="isDangerous">Is Dangerous:</label>
          <Field type="checkbox" id="isDangerous" name="isDangerous" />
          <ErrorMessage name="isDangerous" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewEntryForm;  