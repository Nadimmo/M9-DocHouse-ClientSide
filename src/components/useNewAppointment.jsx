import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useNewAppointment = () => {
    const axiosPublic = useAxiosPublic()
    const {data: appointments = []} = useQuery({
        queryKey: "appointments",
        queryFn: async()=>{
            const res = await axiosPublic.get('/Newappointments')
            return res.data
        }
    })
    return {appointments}
};

export default useNewAppointment;