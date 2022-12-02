import { Form, Divider, Input, InputNumber, Button } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-containor">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item name="upload">
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해 주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품명</div>}
          rules={[{ required: true, message: "상품이름을 입력해주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품가격을 입력해주세요." }]}
        >
          <InputNumber className="upload-price" size="large" defaultValue={0} />
          원
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 설명</div>}
          rules={[{ required: true, message: "상품설명을 입력해주세요." }]}
        >
          <Input.TextArea
            size="large"
            maxLength={300}
            showCount
            id="product-description"
            placeholder="상품 소개를 적어주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
