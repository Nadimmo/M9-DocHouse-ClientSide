import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useDoctors = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data: doctor = [] } = useQuery({
        queryKey: ['doctor'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/doctors')
            return res.data
        }
    })
    return {doctor,refetch}
};

export default useDoctors;