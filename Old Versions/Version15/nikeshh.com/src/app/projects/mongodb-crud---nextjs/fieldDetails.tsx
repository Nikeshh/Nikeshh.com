const FieldDetails = () => {
    const fields = [
      { field: '_id', description: 'Unique identifier for the product', type: 'ObjectId', required: 'No' },
      { field: 'title', description: 'The title of the product', type: 'String', required: 'Yes' },
      { field: 'description', description: 'A detailed description of the product', type: 'String', required: 'Yes' },
      { field: 'bundle_products', description: 'A map of bundle products with their IDs', type: 'Map', required: 'No' },
      { field: 'company', description: 'The company that offers the product', type: 'String', required: 'Yes' },
      { field: 'company_logo', description: 'URL to the company’s logo', type: 'String', required: 'Yes' },
      { field: 'price', description: 'The price of the product', type: 'Number', required: 'Yes' },
      { field: 'stripe_product_id', description: 'The product ID in Stripe for payment processing', type: 'String', required: 'No' },
      { field: 'bundle_product_price', description: 'The price of the bundle product', type: 'Number', required: 'Yes' },
      { field: 'features', description: 'List of features of the product', type: '[String]', required: 'Yes' },
      { field: 'about', description: 'Information about the product', type: 'String', required: 'Yes' },
      { field: 'tags', description: 'Tags associated with the product for searchability', type: '[String]', required: 'Yes' },
      { field: 'stack', description: 'The tech stack or components associated with the product', type: '[String]', required: 'Yes' },
      { field: 'category', description: 'The main category under which the product is classified', type: 'String', required: 'Yes' },
      { field: 'sub_category', description: 'The sub-category under which the product is classified (if any)', type: 'String', required: 'No' }
    ];
  
    return (
      <div className="container mx-auto p-4">
        {fields.map((field, index) => (
          <div key={index} className="mb-4 p-4 border border-white rounded-lg">
            <p className="text-sm sm:text-base"><strong>Field:</strong> {field.field}</p>
            <p className="text-sm sm:text-base"><strong>Description:</strong> {field.description}</p>
            <p className="text-sm sm:text-base"><strong>Type:</strong> {field.type}</p>
            <p className="text-sm sm:text-base"><strong>Required:</strong> {field.required}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FieldDetails;
  