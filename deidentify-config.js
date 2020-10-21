const replacement = '*'

//Build De-identification config
const deidentify_config = {
        infoTypeTransformations: {
            transformations: [{
                primitiveTransformation: {
                    replaceConfig: {
                        newValue: {stringValue: replacement}
                    }
                }
            }]
        }
    }

module.exports.config = deidentify_config;