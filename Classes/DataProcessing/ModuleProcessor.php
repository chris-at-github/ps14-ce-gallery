<?php

namespace Ps14\CeGallery\DataProcessing;

use TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\DataProcessorInterface;

class ModuleProcessor extends \Ps\Xo\DataProcessing\ModuleProcessor implements DataProcessorInterface {

	/**
	 * @param ContentObjectRenderer $contentObject The data of the content element or page
	 * @param array $contentObjectConfiguration The configuration of Content Object
	 * @param array $processorConfiguration The configuration of this processor
	 * @param array $processedData Key/value store of processed data (e.g. to be passed to a Fluid View)
	 * @return array the processed data as key/value store
	 */
	public function process(ContentObjectRenderer $contentObject, array $contentObjectConfiguration, array $processorConfiguration, array $processedData) {

		if(isset($processedData['flexform']) === true && isset($processedData['data']['frame_classes']) === true) {
			$processedData['data']['frame_classes'] .= ' ce-gallery--' . $processedData['flexform']['settings']['layout'];
		}

		// Lightbox (Tobii) nur einbinden wenn das Haekchen (Image Zoom) im Backend aktiviert ist
		if((int) $processedData['data']['image_zoom'] === 1) {
			$this->addImportJsFiles(['/assets/js/tobii.js' => ['forceOnTop' => true]]);
		}

		// wenn Layout Slider ausgewaehlt ist
		if(isset($processedData['flexform']['settings']['layout']) && $processedData['flexform']['settings']['layout'] === 'slider') {
			$this->addImportJsFiles(['/assets/js/tiny-slider.js' => ['forceOnTop' => true]]);
		}

		return parent::process($contentObject, $contentObjectConfiguration, $processorConfiguration, $processedData);
	}
}