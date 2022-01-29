import React from 'react'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'

const ProductImageTable = ({ check = true }) => {
  return (
    <>
      {check && (
        <Table thead="상품 소개 이미지">
          <ImageContainer />
        </Table>
      )}
    </>
  )
}

export default ProductImageTable
