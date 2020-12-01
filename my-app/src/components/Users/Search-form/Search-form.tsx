import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {filterType} from "../../../redux/reducers/users-reducer";


type PropsType = {
    filterChanged: (filter: filterType) => void
}

const usersSearchValidate = (values: any) => {
    const errors = {};
    return errors;
}

type formType = {
    term: string,
    friend: "true" | "false" | "null"
}

const UsersSearchForm: React.FC<PropsType> = React.memo(({filterChanged}) => {

    const handleSubmit = async (values: formType, {setSubmitting}: FormikHelpers<filterType>) => {

        const filter: filterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        await filterChanged(filter)
        setSubmitting(true)
    }

    return (
        <Formik
            initialValues={{term: '',
                            friend: 'null'}}

            validate={usersSearchValidate}
//@ts-ignore
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value={"null"}>All</option>
                        <option value="true">Followed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
})

export default UsersSearchForm