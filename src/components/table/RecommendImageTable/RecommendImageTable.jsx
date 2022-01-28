import React from 'react'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'

const RecommendImageTable = ({ check = false }) => {
  return (
    <>
      {check && (
        <Table thead="구매자 추천 이미지">
          <ImageContainer />
        </Table>
      )}
    </>
  )
}

export default RecommendImageTable
