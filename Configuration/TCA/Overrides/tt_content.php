<?php

// ---------------------------------------------------------------------------------------------------------------------
// Icon Text Module von TT-Content
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'LLL:EXT:ce_gallery/Resources/Private/Language/locallang_tca.xlf:tx_ce_gallery.title',
		'ce_gallery',
		'content-image'
	),
	'CType',
	'ce_gallery'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
	'*',
	'FILE:EXT:ce_gallery/Configuration/FlexForms/Gallery.xml',
	'ce_gallery'
);

$GLOBALS['TCA']['tt_content']['types']['ce_gallery'] = [
	'showitem' => '
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.header;header, bodytext, tx_xo_file, pi_flexform,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.appearance,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.frames;frames,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
			--palette--;;hidden,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
	',
	'columnsOverrides' => [
		'tx_xo_file' => [
			'label' => 'LLL:EXT:ce_gallery/Resources/Private/Language/locallang_tca.xlf:tt_content.tx_xo_file',
			'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
				'tx_xo_file',
				[
					'appearance' => [
						'collapseAll' => 1,
						'createNewRelationLinkTitle' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:media.addFileReference'
					],
					'maxitems' => 999
				],
				$GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
			),
		]
	]
];

$GLOBALS['TCA']['tt_content']['types']['ce_gallery']['columnsOverrides']['tx_xo_file']['config']['overrideChildTca']['types'] = [
	'0' => [
		'showitem' => '
			--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
			--palette--;;filePalette'
	],
	\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
		'showitem' => '
			--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
			--palette--;;filePalette'
	],
];

$GLOBALS['TCA']['tt_content']['types']['ce_gallery']['columnsOverrides']['bodytext']['config'] = [
	'enableRichtext' => true,
	'richtextConfiguration' => 'xoDefault',
];