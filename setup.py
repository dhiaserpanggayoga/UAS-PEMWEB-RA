from setuptools import setup, find_packages

setup(
    name='resep_dapur',
    version='0.1',
    packages=find_packages(),  # otomatis cari semua package di folder resep_dapur
    install_requires=[
        'pyramid',
        'SQLAlchemy',
        'zope.sqlalchemy',
        'pyramid_jinja2',
        'waitress',
        # tambahkan dependencies lain sesuai kebutuhan
    ],
    entry_points={
        'paste.app_factory': [
            'main = resep_dapur:main',
        ],
    },
)
