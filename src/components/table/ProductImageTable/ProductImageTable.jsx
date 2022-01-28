import React from 'react'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'

const ProductImageTable = () => {
  return (
    <Table thead="상품 소개 이미지">
      <ImageContainer />
    </Table>
  )
}

export default ProductImageTable
