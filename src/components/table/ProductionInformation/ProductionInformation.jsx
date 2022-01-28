import { Input, Table, TableBody } from '../../base'
import CategoryRow from '../../rows/CategoryRow/CategoryRow'
import { TagRow } from '../../rows'
import ImageContainer from '../../domain/ImageContainer/ImageContainer'
import * as S from './Style'

const ProductionInformation = ({}) => {
  return (
    <>
      <Table thead={'상품 기본 정보'}>
        <TableBody title={'카테고리*'}>
          <CategoryRow />
        </TableBody>
        <TableBody title={'필터 태그'}>
          <TagRow />
        </TableBody>
        <TableBody title={'상품명*'}>
          <S.Row>
            <Input placeholder={'상품명을 입력해 주세요.'} width={250} />
            <S.ProductionCode>
              <S.Head>상품 코드</S.Head>
              <S.Contents>{Date.now()}</S.Contents>
            </S.ProductionCode>
          </S.Row>
        </TableBody>
        <TableBody title={'상품 구성 소개 정보*'}>
          <Input placeholder={'상품 구성 소개 정보를 입력해 주세요.'} />
        </TableBody>
        <TableBody title={'상품 썸네일'}>
          <ImageContainer isMultiple={false} />
        </TableBody>
        <TableBody title={'상품 상품 대표 이미지'}>
          <ImageContainer />
        </TableBody>
        <TableBody title={'상품 총 재고*'}>N개</TableBody>
      </Table>
    </>
  )
}

ProductionInformation.propTypes = {}

export default ProductionInformation
